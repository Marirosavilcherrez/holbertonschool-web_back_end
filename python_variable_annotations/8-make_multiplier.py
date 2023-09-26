#!/usr/bin/env python3
""" Complex types - functions"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    "Function that return a function that multiplies"

    def multiplier_function(x: float) -> float:
        return x * multiplier
    return multiplier_function
