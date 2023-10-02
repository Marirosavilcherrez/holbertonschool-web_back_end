#!/usr/bin/env python3
"""Async comprehensions"""

import asyncio
from typing import Generator


async_generator = __import__('0-async_generator').async_generator


async def async_comprehension():
    "Define an async comprehension coroutine"
    async_numbers = [num async for num in async_generator()]
    return async_numbers


async def main():
    "Run the async_comprehension coroutine"
    random_numbers = await async_comprehension()
    print(random_numbers)


if __name__ == "__main__":
    asyncio.run(main())
