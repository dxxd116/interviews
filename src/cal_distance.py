import math

def cal_distance(point,line):
    """
    计算点到直线的距离
    :param point: 点
    :param line: 直线
    :return: 距离
    """
    x0,y0 = point
    line1,line2=line
    dist1=math.sqrt((line1[0]-x0)**2+(line1[1]-y0)**2)
    dist2=math.sqrt((line2[0]-x0)**2+(line2[1]-y0)**2)
    line_len=math.sqrt((line1[0]-line2[0])**2+(line1[1]-line2[1])**2)
    cos_angle=(line_len**2+dist1**2-dist2**2)/(2*line_len*dist1)
    sin_angle=math.sqrt(1-cos_angle**2)
    dist=dist1*sin_angle
    return round(dist,2)

point=(3,2)
line=((-1,0),(1,2))
print(cal_distance(point,line))
    
