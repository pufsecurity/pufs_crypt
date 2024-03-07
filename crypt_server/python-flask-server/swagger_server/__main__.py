#!/usr/bin/env python3

import connexion
from connexion.exceptions import OAuthResponseProblem
from connexion.exceptions import OAuthScopeProblem
from connexion.exceptions import OAuthProblem
from flask import Flask, jsonify, abort

from swagger_server import encoder
from swagger_server import util

def main():
    app = connexion.App(__name__, specification_dir='./swagger/')
    app.app.json_provider_class = encoder.JSONEncoder
    app.add_api('swagger.yaml',
                arguments={'title': 'Crypt Authority Server API'},
                pythonic_params=True)
    app.add_error_handler(OAuthResponseProblem, http_error_handler)
    app.add_error_handler(OAuthScopeProblem, http_error_handler)
    app.add_error_handler(OAuthProblem, http_error_handler)
    app.run(port=8089)

def http_error_handler(error):
    return jsonify(util._generate_msg(connexion.request, 40400,())), 404

if __name__ == '__main__':
    main()
