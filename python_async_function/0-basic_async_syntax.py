#!/usr/bin/env python3
"""The basics of async"""
import asyncio
import random


async def wait_random(max_delay=10):
    "Define a asynchronous function random numbers"
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay


async def main():
    "Create an event"
    result = await wait_random()
    print(f"Waited for {result:.2f} seconds")

if __name__ == "__main__":
    asyncio.run(main())
