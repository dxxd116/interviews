class Shape:
    def __init__(self, color):
        self.__color = color

    def get_color(self):
        return self.__color

class Circle(Shape):
    color=""
    def __init__(self, color, radius):
        super().__init__(color)
        self.__radius = radius

    def get_area(self):
        self.__color = "red"
        area=3.14 * self.__radius ** 2
        print("my color is " + self.__color + " and my area is " + str(area))
        
        return 3.14 * self.__radius ** 2
    

circle=Circle("blue",5)
circle.get_area()
print(circle.get_color())
# print(circle.get_color())