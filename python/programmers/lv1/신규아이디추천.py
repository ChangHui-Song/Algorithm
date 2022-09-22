def check_case(c :str):
    if c.isupper():
        return 1
    elif not (c.isalnum() or c == '-' or c == '_' or c == '.'):
        return 2
    return 0

def replace_common_word(string :str):
    result = ''
    for c in string:
        check = check_case(c)
        if check:
            if check == 1:
                result += c.lower()
            continue
        if result and c == '.' and result[-1] == '.':
            continue
        result += c
    return result

def delete_first_point(string :str):
    if string and string[0] == '.':
        string = string[1:]
    return string

def delete_last_point(string :str):
    if string and string[-1] == '.':
        string = string[:-1]
    return string

def append_empty_string(string :str):
    if not string:
        string += 'a'
    return string

def cut_string(string :str):
    if len(string) >= 16:
        string = string[:15]
    return string

def append_last_word(string :str):
    last_word = string[-1]
    while len(string) <= 2:
        string += last_word
    return string

def solution(new_id :str):
    answer = replace_common_word(new_id)
    answer = delete_first_point(answer)
    answer = delete_last_point(answer)
    answer = cut_string(answer)
    answer = delete_last_point(answer)
    answer = append_empty_string(answer)
    answer = append_last_word(answer)
    return answer

print(solution("...!@BaT#*..y.abcdefghijklm."))
print(solution("z-+.^."))
print(solution("=.="))
print(solution("123_.def"))
print(solution("abcdefghijklmn.p"))