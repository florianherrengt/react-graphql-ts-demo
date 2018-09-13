import * as AWS from "aws-sdk";
import * as config from "config";
import * as winston from "winston";

export interface Context {
  user?: { id: string };
}

const createContext = (userId?: string): Context => {
  const context: Context = {};
  return context;
};

const dynamodb = new AWS.DynamoDB(config.get("dynamo"));

const logger = winston.createLogger({
  level: config.get("debug.level"),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "combined.log" })
  ]
});

export { dynamodb, logger, createContext };
