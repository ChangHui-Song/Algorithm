#!/usr/bin/env python
# -*- coding: utf-8 -*-

import collections

def isPalindrome(s):
	strs = collections.deque()
	
	for char in s:
		if char.isalnum():
			strs.appendleft(char.lower())

	while len(strs) > 1:
		if strs.pop() != strs.popleft():
			return False

	return True

s = "A man, a plan, a canal: Panama"
print(isPalindrome(s))