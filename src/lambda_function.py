AWS_REGION = 'us-east-1'
TOPIC_ARN = 'arn:aws:sns:us-east-1:1234:putYourTopicHere'

import logging
import boto3
from botocore.exceptions import ClientError

# logger config
logger = logging.getLogger()
logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s: %(levelname)s: %(message)s')

sns_client = boto3.client('sns', region_name=AWS_REGION)


def publish_message(topic_arn, message):
    """
    Publishes a message to a topic.
    """
    try:

        messageId = sns_client.publish(
            TopicArn=topic_arn,
            Message=message,
            #Subject=subject,
        )['MessageId']
        
        #response = messageId
        #response = ['messageId', messageId]
        #response = {}
        response = {'messageId': messageId}
        #response = [{'messageId': messageId}]

    except ClientError:
        logger.exception(f'Could not publish message to the topic.')
        raise
    else:
        return response

import json

def lambda_handler(event, context):
    print("Received event:", event)
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    }
    if event and 'httpMethod' in event and event['httpMethod'] == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': headers,
            'body': '{}'
        }
    msg = event['body'] if event and 'body' in event else '{}'
    j = json.loads(event['body'])
    text = j['message'] if 'message' in j else ''
    msg = text + '\n\n' + json.dumps(event, indent=2)
    j = publish_message(TOPIC_ARN, msg)
    response = {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps(j)
    }
    print("Sending response:", response)
    return response
