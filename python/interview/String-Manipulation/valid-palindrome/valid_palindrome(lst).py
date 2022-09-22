#!/usr/bin/env python
# -*- coding: utf-8 -*-

s = "A man, a plan, a canal: Panama"

def isPalindrome(s):
    strs = []
    for char in s:
        if char.isalnum():
            strs.append(char.lower())
    
    while len(strs) > 1:
        if strs.pop(0) != strs.pop():
            return False
    
    return True

print(isPalindrome(s))