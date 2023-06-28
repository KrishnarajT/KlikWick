// should display basic stats like score of everyone in a table, and maybe some graphs.

import React from "react";
import Navbar from "./Navbar";
import StatCard from "./StatCard";
import StatGroup from "./StatGroup";

const Statistics = () => {
  // get localstorage data
  const user_data = JSON.parse(localStorage.getItem("userdata"));
  const spread_data = user_data.map((user) => {
    return {
      id: user.id,
      name: user.name,
      light: user.score.light,
      sound: user.score.sound,
    };
  });

  console.log(spread_data);

  // // replace all 0s with NaNs
  // for (let i = 0; i < spread_data.length; i++) {
  // 	if (spread_data[i].light === 0) {
  // 		spread_data[i].light = NaN;
  // 	}
  // 	if (spread_data[i].sound === 0) {
  // 		spread_data[i].sound = NaN;
  // 	}
  // }

  // get average score
  const average_score = spread_data.reduce((acc, curr) => {
    return {
      id: "average",
      light: acc.light + curr.light,
      sound: acc.sound + curr.sound,
    };
  });
  average_score.light /= spread_data.length;
  average_score.sound /= spread_data.length;
  console.log(average_score);

  // get max score
  const max_score = spread_data.reduce((acc, curr) => {
    return {
      id: "max",
      light: Math.max(acc.light, curr.light),
      sound: Math.max(acc.sound, curr.sound),
    };
  });
  console.log(max_score);

  // get min score
  const min_score = spread_data.reduce((acc, curr) => {
    return {
      id: "min",
      light: Math.min(acc.light, curr.light),
      sound: Math.min(acc.sound, curr.sound),
    };
  });
  console.log(min_score);

  // get standard deviation
  const standard_deviation = spread_data.reduce((acc, curr) => {
    return {
      id: "standard_deviation",
      light: acc.light + Math.pow(curr.light - average_score.light, 2),
      sound: acc.sound + Math.pow(curr.sound - average_score.sound, 2),
    };
  });
  standard_deviation.light /= spread_data.length;
  standard_deviation.sound /= spread_data.length;
  standard_deviation.light = Math.sqrt(standard_deviation.light);
  standard_deviation.sound = Math.sqrt(standard_deviation.sound);

  console.log(standard_deviation);

  // get median score
  const median_score = {
    id: "median",
    light: spread_data.sort((a, b) => a.light - b.light)[
      Math.floor(spread_data.length / 2)
    ].light,
    sound: spread_data.sort((a, b) => a.sound - b.sound)[
      Math.floor(spread_data.length / 2)
    ].sound,
  };
  console.log(median_score);

  // get mode score
  const mode_score = spread_data.reduce((acc, curr) => {
    acc[curr.light] = (acc[curr.light] || 0) + 1;
    acc[curr.sound] = (acc[curr.sound] || 0) + 1;
    return acc;
  }, {});
  const mode_light = Object.keys(mode_score).reduce((a, b) =>
    mode_score[a] > mode_score[b] ? a : b
  );
  const mode_sound = Object.keys(mode_score).reduce((a, b) =>
    mode_score[a] > mode_score[b] ? a : b
  );
  console.log({ light: mode_light, sound: mode_sound });

  // get range score
  const range_score = {
    id: "range",
    light: max_score.light - min_score.light,
    sound: max_score.sound - min_score.sound,
  };
  console.log(range_score);

  // get variance score
  const variance_score = {
    id: "variance",
    light:
      spread_data.reduce(
        (acc, curr) => acc + Math.pow(curr.light - average_score.light, 2),
        0
      ) / spread_data.length,
    sound:
      spread_data.reduce(
        (acc, curr) => acc + Math.pow(curr.sound - average_score.sound, 2),
        0
      ) / spread_data.length,
  };
  console.log(variance_score);

  // get quartile score
  const quartile_score = {
    id: "quartile",
    light: [
      spread_data[Math.floor(spread_data.length * 0.25)].light,
      spread_data[Math.floor(spread_data.length * 0.5)].light,
      spread_data[Math.floor(spread_data.length * 0.75)].light,
    ],
    sound: [
      spread_data[Math.floor(spread_data.length * 0.25)].sound,
      spread_data[Math.floor(spread_data.length * 0.5)].sound,
      spread_data[Math.floor(spread_data.length * 0.75)].sound,
    ],
  };
  console.log(quartile_score);

  // get percentile score
  const percentile_score = {
    id: "percentile",
    light: spread_data[Math.floor(spread_data.length * 0.9)].light,
    sound: spread_data[Math.floor(spread_data.length * 0.9)].sound,
  };
  console.log(percentile_score);

  // get interquartile range score
  const interquartile_range_score = {
    id: "interquartile_range",
    light: quartile_score.light[2] - quartile_score.light[0],
    sound: quartile_score.sound[2] - quartile_score.sound[0],
  };
  console.log(interquartile_range_score);

  // get coefficient of variation score
  const coefficient_of_variation_score = {
    id: "coefficient_of_variation",
    light: standard_deviation.light / average_score.light,
    sound: standard_deviation.sound / average_score.sound,
  };
  console.log(coefficient_of_variation_score);

  // get skewness score
  const skewness_score = {
    id: "skewness",
    light:
      spread_data.reduce(
        (acc, curr) => acc + Math.pow(curr.light - average_score.light, 3),
        0
      ) /
      (spread_data.length * Math.pow(standard_deviation.light, 3)),
    sound:
      spread_data.reduce(
        (acc, curr) => acc + Math.pow(curr.sound - average_score.sound, 3),
        0
      ) /
      (spread_data.length * Math.pow(standard_deviation.sound, 3)),
  };
  console.log(skewness_score);

  // get kurtosis score
  const kurtosis_score = {
    id: "kurtosis",
    light:
      spread_data.reduce(
        (acc, curr) => acc + Math.pow(curr.light - average_score.light, 4),
        0
      ) /
      (spread_data.length * Math.pow(standard_deviation.light, 4)),
    sound:
      spread_data.reduce(
        (acc, curr) => acc + Math.pow(curr.sound - average_score.sound, 4),
        0
      ) /
      (spread_data.length * Math.pow(standard_deviation.sound, 4)),
  };
  console.log(kurtosis_score);

  // get z-score score
  const z_score_score = spread_data.map((user) => {
    return {
      id: user.id,
      light: (user.light - average_score.light) / standard_deviation.light,
      sound: (user.sound - average_score.sound) / standard_deviation.sound,
    };
  });
  console.log(z_score_score);

  // get mean absolute deviation score
  const mean_absolute_deviation_score = {
    id: "mean_absolute_deviation",
    light:
      spread_data.reduce(
        (acc, curr) => acc + Math.abs(curr.light - average_score.light),
        0
      ) / spread_data.length,
    sound:
      spread_data.reduce(
        (acc, curr) => acc + Math.abs(curr.sound - average_score.sound),
        0
      ) / spread_data.length,
  };
  console.log(mean_absolute_deviation_score);

  // get median absolute deviation score
  const median_absolute_deviation_score = {
    id: "median_absolute_deviation",
    light: spread_data
      .reduce(
        (acc, curr) => acc.concat(Math.abs(curr.light - median_score.light)),
        []
      )
      .sort((a, b) => a - b)[Math.floor(spread_data.length / 2)],
    sound: spread_data
      .reduce(
        (acc, curr) => acc.concat(Math.abs(curr.sound - median_score.sound)),
        []
      )
      .sort((a, b) => a - b)[Math.floor(spread_data.length / 2)],
  };
  console.log(median_absolute_deviation_score);

  // get name of the person with the lowest light score
  const lowest_light_score = spread_data.reduce((prev, curr) => {
    if (curr.light !== 0 && (prev.light === 0 || curr.light < prev.light)) {
      return curr;
    } else {
      return prev;
    }
  });

  const lowest_light_score_name = lowest_light_score.name;
  console.log(lowest_light_score);

  // get name of the person with the lowest sound score
  const lowest_sound_score = spread_data.reduce((prev, curr) => {
    if (curr.sound !== 0 && (prev.sound === 0 || curr.sound < prev.sound)) {
      return curr;
    } else {
      return prev;
    }
  });
  const lowest_sound_score_name = lowest_sound_score.name;

  // get name of the person with the worst light score
  const worst_light_score = spread_data.reduce((prev, curr) =>
    prev.light > curr.light ? prev : curr
  );
  const worst_light_score_name = worst_light_score.name;

  // get name of the person with the worst sound score
  const worst_sound_score = spread_data.reduce((prev, curr) =>
    prev.sound > curr.sound ? prev : curr
  );
  const worst_sound_score_name = worst_sound_score.name;

  // create props for stat group - array of 3 dictionaries.
  // [
  //     {
  //         title:
  //         value:
  //         desc:
  //     }
  // ]

  // mean median and mode
  const conventional = [
    {
      title: "Mean",
      value: average_score,
      desc: "The average score of all the performers",
    },
    {
      title: "Median",
      value: median_score,
      desc: "The middle score of all the performers",
    },
    {
      title: "Mode",
      value: {
        light: mode_light,
        sound: mode_sound,
      },
      desc: "The most common score of all the performers",
    },
  ];

  // deviations
  const deviations = [
    {
      title: "Standard Deviation",
      value: standard_deviation,
      desc: "The average distance of all the scores from the mean",
    },
    {
      title: "Variance",
      value: variance_score,
      desc: "The average squared distance of all the scores from the mean",
    },
    {
      title: "Coefficient of Variation",
      value: coefficient_of_variation_score,
      desc: "The difference between the highest and lowest score",
    },
  ];

  // quartiles and percentiles
  const quartiles_and_percentiles = [
    {
      title: "Range",
      value: range_score,
      desc: "The difference between the highest and lowest score",
    },
    {
      title: "Quartiles",
      value: interquartile_range_score,
      desc: "The range between the first and third quartiles of the data",
    },
    {
      title: "90th Percentile",
      value: percentile_score,
      desc: "The percentage of scores that fall below a given value in the data",
    },
  ];

  // z-score, skewness and kurtosis
  const z_score_skewness_kurtosis = [
    {
      title: "Z-Score",
      value: z_score_score,
      desc: "The number of standard deviations a score is from the mean of the data",
    },
    {
      title: "Skewness",
      value: skewness_score,
      desc: "A measure of the asymmetry of the data distribution",
    },
    {
      title: "Kurtosis",
      value: kurtosis_score,
      desc: "A measure of the 'peakedness' of the data distribution",
    },
  ];
  console.log(conventional);

  return (
    <div>
      <Navbar />
      <div className="m-4 flex flex-col justify-center gap-5 self-center p-4 text-center">
        <h1 className="product-sans text-accentcolor text-6xl font-light">
          Performers
        </h1>
      </div>
      {/* highlighting the people */}
      <div className="flex flex-wrap justify-center gap-16 p-4">
        {/* person with the lowest light score */}
        <StatCard
          title="Best light score"
          name={lowest_light_score_name}
          score={lowest_light_score.light}
        />
        {/* person with the lowest sound score */}
        <StatCard
          title="Best sound score"
          name={lowest_sound_score_name}
          score={lowest_sound_score.sound}
        />
        {/* person with worst sound score */}
        <StatCard
          title="Worst sound score"
          name={worst_sound_score_name}
          score={worst_sound_score.sound}
        />
        {/* person with the worst light score */}
        <StatCard
          title="Worst light score"
          name={worst_light_score_name}
          score={worst_light_score.light}
        />
      </div>
      <div className="m-4 flex flex-col justify-center gap-5 self-center p-4 text-center">
        <h1 className="product-sans text-accentcolor text-6xl font-light">
          Statistics
        </h1>
      </div>

      {/* Showing the stats */}
      <div className="flex  flex-col flex-wrap items-center justify-center gap-16 p-4 align-middle">
        <h1 className="product-sans text-darkcolor text-3xl font-light">
          Conventional Stuff
        </h1>
        <StatGroup data={conventional} what_data="light" />
        <StatGroup data={conventional} what_data="sound" />
        <h1 className="product-sans text-darkcolor text-3xl font-light">
          Deviation and Consistancy
        </h1>
        <StatGroup data={deviations} what_data="light" />
        <StatGroup data={deviations} what_data="sound" />
        <h1 className="product-sans text-darkcolor text-3xl font-light">
          Quartiles and Percentile
        </h1>
        <StatGroup data={quartiles_and_percentiles} what_data="light" />
        <StatGroup data={quartiles_and_percentiles} what_data="sound" />
        <h1 className="product-sans text-darkcolor text-3xl font-light">
          Skewness and Kurtosis
        </h1>
        <StatGroup data={z_score_skewness_kurtosis} what_data="light" />
        <StatGroup data={z_score_skewness_kurtosis} what_data="sound" />
      </div>
    </div>
  );
};

export default Statistics;
