import services from "./services";
import getHandler from "./get/handler";
import createHandler from "./create/handler";

const createService = createHandler(services);
const getService = getHandler(services);

export { getService, createService };
