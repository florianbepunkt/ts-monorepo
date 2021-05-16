import "@nighttrax/bar";
import { testSomething } from "@nighttrax/bar";
import { APIGatewayProxyHandler } from "aws-lambda";

export const handler: APIGatewayProxyHandler = async () => {
  testSomething();

  return {
    statusCode: 201,
    body: JSON.stringify({ message: "You're good to go" }),
  };
};
