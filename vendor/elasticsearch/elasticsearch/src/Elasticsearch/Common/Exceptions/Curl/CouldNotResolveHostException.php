<?php

namespace Elasticsearch\Common\Exceptions\Curl;

use Elasticsearch\Common\Exceptions\ElasticsearchException;
use Elasticsearch\Common\Exceptions\TransportException;

/**
 * Class CouldNotResolveHostException
 *
 * @category Elasticsearch
 * @package  Elasticsearch\Common\Exceptions\Curl
 * @author   Zachary Tong <zachary.tong@elasticsearch.com>
 * @license  //www.apache.org/licenses/LICENSE-2.0 Apache2
 * @link     //elasticsearch.org
  */
class CouldNotResolveHostException extends TransportException implements ElasticsearchException
{
}
