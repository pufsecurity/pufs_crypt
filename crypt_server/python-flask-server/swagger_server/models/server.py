# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class Server(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, server_ip: str=None):  # noqa: E501
        """Server - a model defined in Swagger

        :param server_ip: The server_ip of this Server.  # noqa: E501
        :type server_ip: str
        """
        self.swagger_types = {
            'server_ip': str
        }

        self.attribute_map = {
            'server_ip': 'SERVER_IP'
        }
        self._server_ip = server_ip

    @classmethod
    def from_dict(cls, dikt) -> 'Server':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The server of this Server.  # noqa: E501
        :rtype: Server
        """
        return util.deserialize_model(dikt, cls)

    @property
    def server_ip(self) -> str:
        """Gets the server_ip of this Server.


        :return: The server_ip of this Server.
        :rtype: str
        """
        return self._server_ip

    @server_ip.setter
    def server_ip(self, server_ip: str):
        """Sets the server_ip of this Server.


        :param server_ip: The server_ip of this Server.
        :type server_ip: str
        """

        self._server_ip = server_ip