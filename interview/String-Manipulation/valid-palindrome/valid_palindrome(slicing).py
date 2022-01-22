#!/usr/bin/env python
# -*- coding: utf-8 -*-

import re

def isPalindrome(s):
    s = s.lower()
    
    s = re.sub('[^a-z0-9]', '', s)
    
    return (s, s == s[::-1])

s = "A man, a plan, a canal: Panama"
res_str, res_bool = isPalindrome(s)
if (res_bool):
	print('"' + res_str + '"' + " is a palindrome")
else:
	print('"' + res_str + '"' + " is not a palindrome")