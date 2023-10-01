#!/usr/bin/env python3
"""Async Generator"""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None, None]:
    "Loop take 10 times and generate a random number"
    for i in range(10):
        await asyncio.sleep(1)
        random_float = random.uniform(0, 10)
        yield random_float


async def main():
    "Print the time it takes each"
    async for number in async_generator():
        print(f"{number}")


if __name__ == '__main__':
    bucle_eventos = asyncio.get_event_loop()
    try:
        bucle_eventos.run_until_complete(main())
    finally:
        bucle_eventos.close()
