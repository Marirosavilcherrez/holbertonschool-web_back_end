#!/usr/bin/env python3
"""Execute multiple coroutines at the same time with async"""
import random
import asyncio
from typing import Union, List
from random import uniform


async def wait_random(max_delay: int = 10) -> float:
    "Define a asynchronous function random numbers"
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay


async def wait_n(n: int, max_delay: int) -> List[float]:
    "Define a asynchronous list"
    tasks = [wait_random(max_delay) for _ in range(n)]
    results = await asyncio.gather(*tasks)
    return sorted(results)


async def main():
    "Create an event"
    result: float = await wait_random()
    print(f"Waited for {result:.2f} seconds")

if __name__ == "__main__":
    asyncio.run(main())
