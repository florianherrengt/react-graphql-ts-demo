import { dynamodb, logger } from "../helpers";

const TableName = "user";

const getById = (id: string) => {
  dynamodb.getItem();
};

const create = (username: string, password?: string) => {
  const Item = {
    username: {
      S: username
    },
    password: {
      S: password
    }
  };
  dynamodb
    .putItem({ TableName, Item })
    .promise()
    .then(data => {
      logger.info(`${TableName} created`, data);
      return data;
    })
    .catch(error => {
      logger.error(error);
      return error;
    });
};

export { create };
