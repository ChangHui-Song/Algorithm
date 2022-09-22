#!/usr/bin/env python
# -*- coding: utf-8 -*-

import re
import collections

def mostCommonWord(paragraph, banned):
	words = [word for word in re.sub(r'[^\w]', ' ', paragraph)
		.lower().split()
			if word not in banned]

	counts = collections.Counter(words)
	return counts.most_common(1)[0][0]

paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]

print(mostCommonWord(paragraph, banned))