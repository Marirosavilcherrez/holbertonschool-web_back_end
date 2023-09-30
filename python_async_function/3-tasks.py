#!/usr/bin/env python3
"""Execute task with async"""
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    "Function takes a integer and return an asyncio.Task"
    loop = asyncio.get_event_loop()
    return loop.create_task(wait_random(max_delay))
