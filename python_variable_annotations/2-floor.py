#!/usr/bin/env python3
"""type-annotated function basic annotations"""
from math import floor as math_floor


def floor(n: float) -> int:
    "Function floor return int"
    return math_floor(n)
