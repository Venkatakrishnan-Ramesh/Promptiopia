# MapReduce-Based Text Mining and Categorization System

## Description
This project leverages the power of MapReduce to perform text mining and categorization on large datasets. It involves the use of Hadoop and Python to efficiently process and analyze data, providing insights and categorizations that can be used for various applications.

## Features
- Text Mining: Extracting valuable information from unstructured text data.
- Categorization: Classifying text into predefined categories.
- Scalability: Utilizing MapReduce for parallel processing, enabling handling of large datasets.
- Analytics: Providing statistical insights from the data.

## Requirements
- Hadoop
- Python

## Installation & Setup
1. Install Hadoop on your system following the instructions from the [official documentation](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/SingleCluster.html).
2. Clone this repository.
3. Place your input data in the input directory.

## Usage
Run the MapReduce job with the following command:

```bash
hadoop jar <path-to-your-hadoop-streaming-jar> \
-files mapper.py,reducer.py \
-mapper mapper.py \
-reducer reducer.py \
-input input/* \
-output output

## Output

The output will be saved in the specified output directory. It will contain the categorized text in CSV format.