"""    crypt_controller.py
"""

import subprocess
import connexion
import six

from swagger_server.models.server import Server
from swagger_server import util

SCRIPT_PATH="./scripts"

def backup_post(body):  # noqa: E501
    """Backup data

    backup data # noqa: E501

    :param body:
    :type body: dict | bytes

    :rtype: object
    """
    if connexion.request.is_json:
        body = Server.from_dict(connexion.request.get_json())  # noqa: E501

    command = "{}/backup.sh {}".format(SCRIPT_PATH, body.server_ip)
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
    output, error = process.communicate()
    if process.returncode != 0:
        return 'error run backup'
    else:
        return "{}.".format(output)


def recover_post(body):  # noqa: E501
    """Recover data

    recover data # noqa: E501

    :param body:
    :type body: dict | bytes

    :rtype: object
    """
    if connexion.request.is_json:
        body = Server.from_dict(connexion.request.get_json())  # noqa: E501

    command = "{}/recover.sh {}".format(SCRIPT_PATH, body.server_ip)
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
    output, error = process.communicate()
    if process.returncode != 0:
        return 'error run recover'
    else:
        return "{}.".format(output)
