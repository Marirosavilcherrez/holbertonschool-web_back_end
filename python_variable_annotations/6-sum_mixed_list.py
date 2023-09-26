#!/usr/bin/env python3
"""Complex types - list of floats"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    "Function that return a sum of float list"
    total = 0
    for num in mxd_lst:
        total += num
    return total
