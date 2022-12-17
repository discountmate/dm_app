import glob
import base64

OUTPUT_FILE_FILE_NAME = "BASE64_LIST.txt"

# Get a list of all files with the ".jpeg" extension in the current directory
BASE64_PREFIX = "DATA:IMAGE/JPEG;BASE64"
with open(OUTPUT_FILE_FILE_NAME, 'w') as out_f:
    img_files = glob.glob('./img/*.jpeg')
    # Encode each file as a Base64 string.
    for file in img_files:
        with open(file, 'rb') as f:
            # Read the file content as binary data.
            data = f.read()
            # Encode the binary data as a Base64 string.
            base64_data = base64.b64encode(data).decode('ascii')
            # Print the Base64 string.
            out_string = '{data_size}, "{prefix},{data}\n"'
            out_string = out_string.format(data_size=len(base64_data), prefix=BASE64_PREFIX, data=base64_data)
        out_f.write(out_string)
