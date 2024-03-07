# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.test import BaseTestCase


class TestCryptController(BaseTestCase):
    """CryptController integration test stubs"""

    def test_backup_post(self):
        """Test case for backup_post

        Backup data
        """
        response = self.client.open(
            '/backup',
            method='POST')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_recover_post(self):
        """Test case for recover_post

        Recover data
        """
        response = self.client.open(
            '/recover',
            method='POST')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
