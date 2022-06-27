"use strict";

const getHandler =({v4})=> async (event:any) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: v4(),
      },
      null,
      2
    ),
  };
};

export default getHandler;