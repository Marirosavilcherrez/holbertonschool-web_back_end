#!/usr/bin/env python3
"""Function that return all students sorted by average score"""

import pymongo


def top_students(mongo_collection):
    "Return all students in order"
    pipeline = [
        {
            '$group': {
                '_id': '$_id',
                'averageScore': {'$avg': '$scores.score'}
            }
        },
        {
            '$sort': {'averageScore': -1}
        }
    ]
    new_research = mongo_collection.aggregate(pipeline)
    top_students_list = [
        {
            'averageScore': student['averageScore'],
            'student': mongo_collection.find_one({'_id': student['_id']})
        }
        for student in top_students_cursor
    ]

    return top_students_list
