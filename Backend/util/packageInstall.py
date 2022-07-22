# these are the packages we need to install for OCRScript to work 
# just python packageInstall.py to start the installation 
import sys
import subprocess
subprocess.check_call([sys.executable, '-m', 'pip', 'install', 
'numpy'])
subprocess.check_call([sys.executable, '-m', 'pip', 'install', 
'pandas'])
subprocess.check_call([sys.executable, '-m', 'pip', 'install', 
'opencv-python'])
subprocess.check_call([sys.executable, '-m', 'pip', 'install', 
'matplotlib'])
subprocess.check_call([sys.executable, '-m', 'pip', 'install', 
'scikit-image'])
subprocess.check_call([sys.executable, '-m', 'pip', 'install', 
'pytesseract'])
subprocess.check_call([sys.executable, '-m', 'pip', 'install', 
'mysql-connector-python'])
subprocess.check_call([sys.executable, '-m', 'pip', 'install', 
'pymysql'])
subprocess.check_call([sys.executable, '-m', 'pip', 'install', 
'sqlalchemy'])