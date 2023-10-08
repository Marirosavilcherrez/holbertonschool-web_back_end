#!/usr/bin/env python3
"""Function that return list pagination"""


def index_range(page: int, page_size: int) -> tuple:
    "Function that return a tuple pagination"
    start_index = (page - 1) * page_size
    end_index = min(start_index + page_size, float('inf'))
    return(start_index, end_index)
