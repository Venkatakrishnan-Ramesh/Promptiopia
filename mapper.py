#!/usr/bin/env python

import sys
import re
from textblob import TextBlob

def clean_text(text):
    text = re.sub(r"http\S+|www\S+|https\S+", '', text, flags=re.MULTILINE)  # Remove URLs
    text = re.sub(r'\@\w+|\#', '', text)  # Remove mentions and hashtags
    text = text.lower().strip()  # Convert to lower case
    return text

for raw_line in sys.stdin.buffer:
    try:
        line = raw_line.decode('utf-8').strip()
    except UnicodeDecodeError:
        continue  # Skip lines that can't be decoded

    line = clean_text(line)
    sentiment_score = TextBlob(line).sentiment.polarity
    sentiment_category = "positive" if sentiment_score > 0 else "negative" if sentiment_score < 0 else "neutral"

    print(f"{sentiment_category}\t{line}")
