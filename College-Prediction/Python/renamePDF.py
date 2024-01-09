import os

def rename_pdf_files(folder_path):
    # List all files in the folder
    files = os.listdir(folder_path)
    # print(files)

    start = 1
    # Iterate through each file
    for file in files:
        if file.endswith('.pdf'):
            # Create a new name for the file (you can customize the naming logic)
            new_name = f"{start}.pdf"

            # Construct the full paths for the old and new names
            old_path = os.path.join(folder_path, file)
            new_path = os.path.join(folder_path, new_name)

            # Rename the file
            os.rename(old_path, new_path)
            print(f"Renamed: {file} to {new_name}")
        start += 1


def main():

    # Specify the folder path containing the PDF files
    folder_path = 'E:\GitHub\College-Prediction\Datasets\PDFs'

    # Call the function to rename PDF files in the folder
    rename_pdf_files(folder_path)


if __name__ == '__main__':
    main()