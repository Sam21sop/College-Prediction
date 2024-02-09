import os
import pandas as pd
from tabula import read_pdf

def convert_pdf_to_csv(pdf_path, csv_path):
    # Use tabula to extract tables from the PDF
    tables = read_pdf(pdf_path, pages='all', multiple_tables=True)

    # Assuming you want to save all tables from the PDF into a single CSV file
    combined_df = pd.concat(tables, ignore_index=True)

    # Save the combined dataframe to a CSV file
    combined_df.to_csv(csv_path, index=False)
    print(f"Converted: {pdf_path} to {csv_path}")

def convert_all_pdfs_to_csv(folder_path):
    # List all files in the folder
    files = os.listdir(folder_path)

    # Iterate through each file
    for file in files:
        if file.endswith('.pdf'):
            # Construct the full paths for the PDF and CSV files
            pdf_path = os.path.join(folder_path, file)
            csv_name = os.path.splitext(file)[0] + '.csv'
            csv_path = os.path.join(folder_path, csv_name)

            # Convert the PDF to CSV
            convert_pdf_to_csv(pdf_path, csv_path)

# Specify the folder path containing the PDF files
folder_path = 'E:\GitHub\College-Prediction\Datasets\PDFs'

# Call the function to convert all PDF files to CSV in the folder
convert_all_pdfs_to_csv(folder_path)
