// ===================== js 이용 =====================

// const path = require("path");

// module.exports = {
//   mode: "development",
//   entry: "./main.js", // 어떤 파일을 진입점으로 번들링할지
//   output: {
//     filename: "bundle.js", // 번들로 만들어질 파일 이름
//     path: path.resolve(__dirname, "dist"), // 번들 파일이 어디에 저장될지
//   },
// };

// ===================== ts 이용 =====================

// const path = require("path");

// module.exports = {
//   mode: "development",
//   entry: "./main.ts", // 웹팩이 읽기 시작할 파일을 .ts로 변경했어요.
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts$/, // .ts 파일들은
//         use: "ts-loader", // ts-loader를 거쳐 처리돼요.
//         exclude: /node_modules/, // 외부 모듈은 제외해요.
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".ts", ".js"], // 파일을 import할 때 확장자를 생략할 수 있어요. TypeScript와 JavaScript를 혼용하는 프로젝트에서 설정해두면 좋아요.
//   },
// };

// ===================== react / babel 이용 =====================

const path = require("path");

module.exports = {
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  entry: "./main.tsx", // 웹팩이 읽기 시작할 파일을 .tsx로 변경
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // .ts와 .tsx 파일을 대상으로
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env", // 최신 JS 문법을 변환해요
                "@babel/preset-react", // JSX를 변환해요
                "@babel/preset-typescript", // 타입스크립트를 변환해요
              ],
            },
          },
        ],
        exclude: /node_modules/, // 외부 모듈은 제외해요.
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // .tsx 확장자도 처리할 수 있게 해요
  },
};
