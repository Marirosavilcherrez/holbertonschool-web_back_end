#!/usr/bin/env python3
"""Function that return the list of a specific topic"""

import pymongo


def schools_by_topic(mongo_collection, topic):
    "Return the list of school having specific topic"
    new_research = mongo_collection.find({"topics" : topic})
    return new_research
