#!/usr/bin/env python3
"""Function that return list pagination"""

import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def index_range(self, page: int, page_size: int) -> tuple:
        "Function that return a tuple pagination"
        start_index = (page - 1) * page_size
        end_index = min(start_index + page_size, len(self.dataset()))
        return(start_index, end_index)

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        "Function that return the appropiate page"
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        start_index, end_index = self.index_range(page, page_size)
        return self.dataset()[start_index:end_index]
    
    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        "Function return hypermedia pagination"
        self.dataset()
        total_pages = (len(self.__dataset) + page_size -1)// page_size 
        data = self.get_page(page, page_size)

        response = {
            'page_size': page_size,
            'page': page,
            'data': data,
            'next_page': page + 1 if page < total_pages else None,
            'prev_page': page - 1 if page > 1 else None,
            'total_pages' : total_pages
        }
        return response
