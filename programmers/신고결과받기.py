from collections import defaultdict

def solution(id_list, report, k):
    answer = [0 for _ in range(len(id_list))]
    report_dict = defaultdict(list)
    
    for report_info in report:
        report_from, report_to = report_info.split()
        report_dict[report_to].append(report_from)
        
    for x in report_dict:
        report_dict[x] = list(set(report_dict[x]))

    for x in report_dict:
        if len(report_dict[x]) >= k:
            for report_from in report_dict[x]:
                answer[id_list.index(report_from)] += 1
    return answer

id_list = ["muzi", "frodo", "apeach", "neo"]
report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
k = 2
solution(id_list, report, k)