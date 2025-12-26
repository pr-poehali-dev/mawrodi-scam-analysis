import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [investment, setInvestment] = useState(10000);
  const [monthsInvested, setMonthsInvested] = useState(6);
  const [promisedReturn, setPromisedReturn] = useState(30);

  const calculateLosses = () => {
    const expectedReturn = investment * (1 + promisedReturn / 100);
    const actualLoss = investment;
    const opportunityCost = investment * Math.pow(1.08, monthsInvested / 12);
    const totalLoss = actualLoss + (opportunityCost - investment);
    
    return {
      invested: investment,
      expected: expectedReturn,
      actualLoss: actualLoss,
      opportunityCost: opportunityCost - investment,
      totalLoss: totalLoss
    };
  };

  const losses = calculateLosses();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Icon name="AlertTriangle" className="text-destructive" size={28} />
              <span className="text-xl font-bold text-primary">Финансовые Пирамиды</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-accent transition-colors">Главная</button>
              <button onClick={() => scrollToSection('pyramids')} className="text-sm font-medium hover:text-accent transition-colors">Пирамиды</button>
              <button onClick={() => scrollToSection('schemes')} className="text-sm font-medium hover:text-accent transition-colors">Схемы</button>
              <button onClick={() => scrollToSection('calculator')} className="text-sm font-medium hover:text-accent transition-colors">Калькулятор</button>
              <button onClick={() => scrollToSection('resources')} className="text-sm font-medium hover:text-accent transition-colors">Ресурсы</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in-up">
            <Badge variant="destructive" className="mb-4 text-sm px-4 py-2">
              <Icon name="ShieldAlert" size={16} className="mr-2" />
              Защитите свои деньги
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Финансовые пирамиды:<br />
              <span className="text-destructive">Как не попасться</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Узнайте о схемах Мавроди, научитесь распознавать признаки финансовых пирамид 
              и рассчитайте потенциальные потери с помощью интерактивного калькулятора
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('calculator')} className="gap-2">
                <Icon name="Calculator" size={20} />
                Рассчитать риски
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('pyramids')} className="gap-2">
                <Icon name="BookOpen" size={20} />
                Узнать больше
              </Button>
            </div>
          </div>

          <Alert className="mt-12 max-w-4xl mx-auto border-destructive/50 bg-destructive/5">
            <Icon name="AlertCircle" className="text-destructive" />
            <AlertDescription className="text-base">
              <strong>Важно:</strong> По оценкам экспертов, МММ и другие схемы Мавроди нанесли ущерб 
              более чем 10 миллионам человек на сумму свыше $10 млрд. Не повторяйте чужих ошибок!
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Pyramids History Section */}
      <section id="pyramids" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">История пирамид Мавроди</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Сергей Мавроди создал несколько крупнейших финансовых пирамид в истории России
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="destructive">1989-1994</Badge>
                  <Icon name="TrendingDown" className="text-destructive" size={24} />
                </div>
                <CardTitle className="text-2xl">МММ (первая волна)</CardTitle>
                <CardDescription>Крупнейшая финансовая пирамида 90-х годов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Users" className="text-muted-foreground mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Пострадавших: 10-15 млн человек</p>
                    <p className="text-sm text-muted-foreground">Около 5-10% населения СССР/России</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="DollarSign" className="text-muted-foreground mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Ущерб: $1-10 млрд</p>
                    <p className="text-sm text-muted-foreground">Точная сумма до сих пор неизвестна</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Target" className="text-muted-foreground mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Обещанная доходность: 1000-3000% годовых</p>
                    <p className="text-sm text-muted-foreground">Использовались билеты МММ как валюта</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="destructive">2011-2013</Badge>
                  <Icon name="RefreshCw" className="text-destructive" size={24} />
                </div>
                <CardTitle className="text-2xl">МММ-2011</CardTitle>
                <CardDescription>Возрождение схемы в эпоху интернета</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Globe" className="text-muted-foreground mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Международная экспансия</p>
                    <p className="text-sm text-muted-foreground">Работала в 107 странах мира</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Percent" className="text-muted-foreground mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Обещания: до 100% в месяц</p>
                    <p className="text-sm text-muted-foreground">Используя биткоин и электронные деньги</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Megaphone" className="text-muted-foreground mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Стратегия: "Честная финансовая пирамида"</p>
                    <p className="text-sm text-muted-foreground">Мавроди открыто признавал суть проекта</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schemes Section */}
      <section id="schemes" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">Как работают схемы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Визуальное объяснение механизмов финансовых пирамид
            </p>
          </div>

          <Tabs defaultValue="pyramid" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="pyramid">Пирамида</TabsTrigger>
              <TabsTrigger value="ponzi">Схема Понци</TabsTrigger>
              <TabsTrigger value="signs">Признаки</TabsTrigger>
            </TabsList>

            <TabsContent value="pyramid" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Triangle" className="text-destructive" />
                    Классическая финансовая пирамида
                  </CardTitle>
                  <CardDescription>Схема привлечения новых участников</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-full flex justify-center">
                        <div className="bg-destructive text-white px-6 py-3 rounded-lg font-semibold">
                          Основатель (получает всё)
                        </div>
                      </div>
                      <Icon name="ArrowDown" className="text-muted-foreground" />
                      <div className="w-full flex justify-center gap-4">
                        <div className="bg-orange-500 text-white px-4 py-2 rounded text-sm">Уровень 1</div>
                        <div className="bg-orange-500 text-white px-4 py-2 rounded text-sm">Уровень 1</div>
                      </div>
                      <Icon name="ArrowDown" className="text-muted-foreground" />
                      <div className="w-full flex justify-center gap-2">
                        <div className="bg-yellow-500 text-white px-3 py-2 rounded text-xs">Ур. 2</div>
                        <div className="bg-yellow-500 text-white px-3 py-2 rounded text-xs">Ур. 2</div>
                        <div className="bg-yellow-500 text-white px-3 py-2 rounded text-xs">Ур. 2</div>
                        <div className="bg-yellow-500 text-white px-3 py-2 rounded text-xs">Ур. 2</div>
                      </div>
                      <Icon name="ArrowDown" className="text-muted-foreground" />
                      <div className="w-full flex justify-center gap-1 flex-wrap">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="bg-green-500 text-white px-2 py-1 rounded text-xs">3</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-destructive/10 p-2 rounded-full">
                        <Icon name="AlertCircle" className="text-destructive" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold">Деньги идут наверх</p>
                        <p className="text-sm text-muted-foreground">Взносы новых участников оплачивают выплаты старым</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-destructive/10 p-2 rounded-full">
                        <Icon name="TrendingDown" className="text-destructive" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold">Неизбежный крах</p>
                        <p className="text-sm text-muted-foreground">Когда приток новых участников останавливается, система рушится</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-destructive/10 p-2 rounded-full">
                        <Icon name="Users" className="text-destructive" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold">Большинство теряет деньги</p>
                        <p className="text-sm text-muted-foreground">80-90% участников остаются в убытке</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ponzi" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Repeat" className="text-destructive" />
                    Схема Понци
                  </CardTitle>
                  <CardDescription>Имитация инвестиционной деятельности</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-slate-50 p-6 rounded-lg space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-accent text-white p-4 rounded-lg flex-1 text-center">
                        <Icon name="DollarSign" size={32} className="mx-auto mb-2" />
                        <p className="font-semibold">Новые инвестиции</p>
                      </div>
                      <Icon name="ArrowRight" className="text-muted-foreground" size={32} />
                      <div className="bg-orange-500 text-white p-4 rounded-lg flex-1 text-center">
                        <Icon name="TrendingUp" size={32} className="mx-auto mb-2" />
                        <p className="font-semibold">Выплаты старым</p>
                      </div>
                    </div>
                    <div className="text-center text-sm text-muted-foreground italic border-t pt-4">
                      "Инвестиционная компания" не ведёт реальной деятельности
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-destructive/10 p-2 rounded-full">
                        <Icon name="Eye" className="text-destructive" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold">Иллюзия успеха</p>
                        <p className="text-sm text-muted-foreground">Первые инвесторы получают выплаты, привлекая новых</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-destructive/10 p-2 rounded-full">
                        <Icon name="FileQuestion" className="text-destructive" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold">Отсутствие прозрачности</p>
                        <p className="text-sm text-muted-foreground">Никто не знает, как на самом деле используются деньги</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-destructive/10 p-2 rounded-full">
                        <Icon name="Clock" className="text-destructive" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold">Вопрос времени</p>
                        <p className="text-sm text-muted-foreground">Схема держится только на постоянном притоке новых денег</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="signs" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Search" className="text-destructive" />
                    Признаки финансовой пирамиды
                  </CardTitle>
                  <CardDescription>На что обратить внимание</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-destructive/5 border border-destructive/20 p-4 rounded-lg">
                      <div className="flex items-start gap-3 mb-2">
                        <Icon name="Zap" className="text-destructive mt-1" size={20} />
                        <h4 className="font-semibold">Нереальная доходность</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">Обещания 20-100%+ в месяц без рисков</p>
                    </div>

                    <div className="bg-destructive/5 border border-destructive/20 p-4 rounded-lg">
                      <div className="flex items-start gap-3 mb-2">
                        <Icon name="UserPlus" className="text-destructive mt-1" size={20} />
                        <h4 className="font-semibold">Бонусы за привлечение</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">Основной доход от приглашений новых людей</p>
                    </div>

                    <div className="bg-destructive/5 border border-destructive/20 p-4 rounded-lg">
                      <div className="flex items-start gap-3 mb-2">
                        <Icon name="Lock" className="text-destructive mt-1" size={20} />
                        <h4 className="font-semibold">Нет лицензий</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">Отсутствие регулирования и прозрачности</p>
                    </div>

                    <div className="bg-destructive/5 border border-destructive/20 p-4 rounded-lg">
                      <div className="flex items-start gap-3 mb-2">
                        <Icon name="Clock" className="text-destructive mt-1" size={20} />
                        <h4 className="font-semibold">Давление времени</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">"Успей сейчас", "Ограниченное предложение"</p>
                    </div>

                    <div className="bg-destructive/5 border border-destructive/20 p-4 rounded-lg">
                      <div className="flex items-start gap-3 mb-2">
                        <Icon name="HelpCircle" className="text-destructive mt-1" size={20} />
                        <h4 className="font-semibold">Неясная модель</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">Не объясняют, откуда берется прибыль</p>
                    </div>

                    <div className="bg-destructive/5 border border-destructive/20 p-4 rounded-lg">
                      <div className="flex items-start gap-3 mb-2">
                        <Icon name="Star" className="text-destructive mt-1" size={20} />
                        <h4 className="font-semibold">Фальшивые отзывы</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">Массовые положительные отзывы и истории успеха</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">Калькулятор потерь</h2>
            <p className="text-lg text-muted-foreground">
              Рассчитайте реальные потери при участии в финансовой пирамиде
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calculator" className="text-accent" />
                Анализ инвестиций
              </CardTitle>
              <CardDescription>
                Введите параметры предполагаемой инвестиции для расчета рисков
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="investment">Сумма инвестиции (₽)</Label>
                  <Input
                    id="investment"
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    min={1000}
                    step={1000}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="months">Срок (месяцев)</Label>
                  <Input
                    id="months"
                    type="number"
                    value={monthsInvested}
                    onChange={(e) => setMonthsInvested(Number(e.target.value))}
                    min={1}
                    max={60}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="return">Обещанный доход (%)</Label>
                  <Input
                    id="return"
                    type="number"
                    value={promisedReturn}
                    onChange={(e) => setPromisedReturn(Number(e.target.value))}
                    min={0}
                    max={1000}
                  />
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Icon name="BarChart3" className="text-accent" />
                  Результаты анализа
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="TrendingUp" className="text-muted-foreground" size={20} />
                      <p className="text-sm text-muted-foreground">Обещанная прибыль</p>
                    </div>
                    <p className="text-2xl font-bold text-green-600">
                      {losses.expected.toLocaleString('ru-RU')} ₽
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      +{(losses.expected - losses.invested).toLocaleString('ru-RU')} ₽
                    </p>
                  </div>

                  <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="TrendingDown" className="text-destructive" size={20} />
                      <p className="text-sm text-muted-foreground">Реальная потеря</p>
                    </div>
                    <p className="text-2xl font-bold text-destructive">
                      {losses.actualLoss.toLocaleString('ru-RU')} ₽
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">100% вложений</p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Clock" className="text-orange-600" size={20} />
                      <p className="text-sm text-muted-foreground">Упущенная выгода</p>
                    </div>
                    <p className="text-2xl font-bold text-orange-600">
                      {losses.opportunityCost.toLocaleString('ru-RU')} ₽
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      При консервативных 8% годовых
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="AlertTriangle" className="text-red-600" size={20} />
                      <p className="text-sm text-muted-foreground">Общий ущерб</p>
                    </div>
                    <p className="text-2xl font-bold text-red-600">
                      {losses.totalLoss.toLocaleString('ru-RU')} ₽
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Потери + упущенная выгода
                    </p>
                  </div>
                </div>
              </div>

              <Alert className="border-destructive/50 bg-destructive/5">
                <Icon name="Info" className="text-destructive" />
                <AlertDescription>
                  <strong>Важно понимать:</strong> В 90% случаев участники финансовых пирамид теряют все вложенные средства. 
                  Обещания высокой доходности без рисков — главный признак мошенничества.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">Полезные ресурсы</h2>
            <p className="text-lg text-muted-foreground">
              Куда обратиться за помощью и дополнительной информацией
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Shield" className="text-accent" size={24} />
                </div>
                <CardTitle>Центробанк РФ</CardTitle>
                <CardDescription>Официальные предупреждения</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Реестр финансовых пирамид и нелегальных организаций
                </p>
                <Button variant="outline" className="w-full gap-2">
                  <Icon name="ExternalLink" size={16} />
                  Перейти
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Scale" className="text-accent" size={24} />
                </div>
                <CardTitle>Роспотребнадзор</CardTitle>
                <CardDescription>Защита прав потребителей</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Куда жаловаться на финансовые пирамиды
                </p>
                <Button variant="outline" className="w-full gap-2">
                  <Icon name="ExternalLink" size={16} />
                  Перейти
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="BookOpen" className="text-accent" size={24} />
                </div>
                <CardTitle>Финансовая грамотность</CardTitle>
                <CardDescription>Обучающие материалы</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Как защитить свои деньги и инвестировать грамотно
                </p>
                <Button variant="outline" className="w-full gap-2">
                  <Icon name="ExternalLink" size={16} />
                  Перейти
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent text-white p-3 rounded-lg">
                  <Icon name="Lightbulb" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Золотое правило инвестиций</h3>
                  <p className="text-muted-foreground mb-4">
                    Если предложение кажется слишком хорошим, чтобы быть правдой — скорее всего, это обман. 
                    Настоящие инвестиции требуют времени, знаний и всегда сопряжены с рисками.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="gap-1">
                      <Icon name="CheckCircle2" size={14} />
                      Диверсификация
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      <Icon name="CheckCircle2" size={14} />
                      Долгосрочность
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      <Icon name="CheckCircle2" size={14} />
                      Лицензированные компании
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      <Icon name="CheckCircle2" size={14} />
                      Реалистичная доходность
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="AlertTriangle" size={24} />
            <span className="text-xl font-bold">Финансовые Пирамиды</span>
          </div>
          <p className="text-sm opacity-90 mb-4">
            Информационный портал о финансовых пирамидах и защите от мошенничества
          </p>
          <p className="text-xs opacity-75">
            Будьте бдительны! Берегите свои деньги и не доверяйте сомнительным схемам обогащения.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
