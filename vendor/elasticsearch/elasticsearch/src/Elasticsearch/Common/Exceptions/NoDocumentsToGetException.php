<?php

namespace Elasticsearch\Common\Exceptions;

/**
 * NoDocumentsToGetException
 *
 * @category Elasticsearch
 * @package  Elasticsearch\Common\Exceptions
 * @author   Zachary Tong <zachary.tong@elasticsearch.com>
 * @license  //www.apache.org/licenses/LICENSE-2.0 Apache2
 * @link     //elasticsearch.org
 */
class NoDocumentsToGetException extends ServerErrorResponseException implements ElasticsearchException
{
}
