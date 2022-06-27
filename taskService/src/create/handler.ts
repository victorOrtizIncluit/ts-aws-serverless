const createHandler =
  ({ client, PutItemCommand, v4, marshall }) =>
  async (event: any) => {
    const { title, description } = JSON.parse(event.body);
    const createdAt = new Date().toDateString();
    const id = v4();

    const task = {
      id,
      title,
      description,
      createdAt,
    };

    const params = {
      TableName: process.env.DYNAMODB_TABLE_NAME,
      Item: marshall(task || {}),
    };

    try {
      const createResult = await client.send(new PutItemCommand(params));

      console.debug(createResult);

      return {
        statusCode: 200,
        body: JSON.stringify(createResult),
      };
    } catch (e) {
      console.error(e);
      JSON.stringify({
        message: "Failed to create post.",
        errorMsg: e.message,
        errorStack: e.stack,
      });
    }
  };

export default createHandler;
