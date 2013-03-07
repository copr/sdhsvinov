def removeOtherP(string):
    """ Function to remove all paragraps after the first one """
    index = string.find('</p>')
    return string[:(index+4)]
