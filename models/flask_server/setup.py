from setuptools import find_packages,setup
from typing import List

HYPEN_E_DOT='-e .'

def get_requirements(file_path:str) -> List[str]:
    requirements = []
    with open(file_path) as file_obj:
        requirements=file_obj.readlines()
        [req.replace("\n","") for req in requirements]

        if HYPEN_E_DOT in requirements:
            requirements.remove(HYPEN_E_DOT)

    return requirements



setup(
    name='REkart',
    packages=find_packages(),
    version='0.1.0',
    author='DMASTAS',
    author_email='21bcs164@ietdavv.edu.in.com',
    license='MIT',
    install_requires=get_requirements('requirement.txt')
)