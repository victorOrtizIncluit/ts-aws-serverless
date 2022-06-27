import v4 from "./uuid/uuid";
import {
  client,
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
  DeleteItemCommand,
  ScanCommand,
  UpdateItemCommand,
  marshall,
  unmarshall
} from "./dynamoDb/db";

export default {
  client,
  marshall,
  unmarshall,
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
  DeleteItemCommand,
  ScanCommand,
  UpdateItemCommand,
  v4,
};
