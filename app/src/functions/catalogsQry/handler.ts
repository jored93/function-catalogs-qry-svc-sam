import { Logger } from '@aws-lambda-powertools/logger';
import { injectLambdaContext } from '@aws-lambda-powertools/logger/middleware';
import middy from '@middy/core';
import { HttpResponse } from '../../utils/response';
import { CatalogService } from '../../services/Catalog';

const logger = new Logger();

const lambdaHandler = async (event: any) => {
    const catalogService = new CatalogService();
    try {
        const catalogList: any = await catalogService.listCatalog();
        logger.info(catalogList);
        return HttpResponse._200(catalogList)
    } catch (err) {
        logger.error('This is an ERROR log with some context');
        return HttpResponse._500(err);
    }
};

export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));