<?php

namespace Elasticsearch\Common\Exceptions;

/**
 * RequestTimeout408Exception
 *
 * @category Elasticsearch
 * @package  Elasticsearch\Common\Exceptions
 * @author   Zachary Tong <zachary.tong@elasticsearch.com>
 * @license  //www.apache.org/licenses/LICENSE-2.0 Apache2
 * @link     //elasticsearch.org
 */
class RequestTimeout408Exception extends BadRequest400Exception implements ElasticsearchException
{
}
