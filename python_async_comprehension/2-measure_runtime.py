#!/usr/bin/env python3
"""Async comprehensions"""

import asyncio
from typing import Generator
import time


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    "Execute in parallel"
    start_time = time.time()
    tasks = [async_comprehension() for _ in range(4)]
    await asyncio.gather(*tasks)
    end_time = time.time()
    total_runtime = end_time - start_time
    return total_runtime


async def main():
    "Run the async_comprehension coroutine"
    total_runtime = await measure_runtime()
    print(f"{total_runtime}")


if __name__ == "__main__":
    asyncio.run(main())
