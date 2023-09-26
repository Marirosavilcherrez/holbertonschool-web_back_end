#!/usr/bin/env python3
""" Complex types - functions"""
from typing import Iterable, Tuple, Sequence, List


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    "Function that return a list"
    return [(i, len(i)) for i in lst]
