<?php

namespace Elasticsearch\Common\Exceptions;

/**
 * BadRequest400Exception, thrown on 400 conflict http error
 *
 * @category Elasticsearch
 * @package  Elasticsearch\Common\Exceptions
 * @author   Zachary Tong <zachary.tong@elasticsearch.com>
 * @license  //www.apache.org/licenses/LICENSE-2.0 Apache2
 * @link     //elasticsearch.org
 */
class BadRequest400Exception extends \Exception implements ElasticsearchException
{
}
