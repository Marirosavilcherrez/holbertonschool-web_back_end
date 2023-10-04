#!/usr/bin/env python3
"""Function thata insert a new document in a collection"""

import pymongo


def insert_school(mongo_collection, **kwargs):
    "Insert a document"
    new_insert = mongo_collection.insert_one(kwargs)
    return new_insert.inserted_id
