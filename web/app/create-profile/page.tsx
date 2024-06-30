'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Check, ChevronsUpDown } from 'lucide-react';
import { format, set } from 'date-fns';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const formSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  university: z.string(),
  programme: z.string(),
  educationLevel: z.enum(['Bachelor', 'Master', 'PhD']),
  budget: z.number().min(0),
  deadline: z.date(),
  location: z.enum([
    'Africa',
    'Antarctica',
    'Asia',
    'Europe',
    'North America',
    'Australia',
    'South America',
  ]),
  caseDescription: z.string().min(50),
});

export default function ApplyPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    const obj = values;
    fetchStudent(obj);
  };

  let studentId: any;
  const fetchStudent = async (obj: any) => {
    const data = {
      first_name: obj.firstname,
      last_name: obj.lastname,
      university: obj.university,
      program: obj.programme,
      education_level: obj.educationLevel,
      region: obj.location,
    };

    try {
      const res = await fetch('/api/students/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      fetchCase(obj, result.id);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchCase = async (obj: any, id: any) => {
    const data = {
      studentId: id,
      goal: obj.budget,
      deadline: obj.deadline.toISOString(),
      description: obj.caseDescription,
      funding_wallet: '0x5B184DA2543207104Aa0C167f27B5E28a2BDa34f',
    };

    try {
      const res = await fetch('/api/cases/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  type University = {
    name: string;
  };

  const [universities, setUniversities] = useState<University[]>([]);
  const fetchUniversity = (value: any) => {
    fetch(`http://universities.hipolabs.com/search?name=${value}`)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.slice(0, 10));
        setUniversities(json.slice(0, 10));
      });
  };
  const handleUniChange = (value: any) => {
    fetchUniversity(value);
  };

  return (
    <>
      <Header />
      <main className="mx-auto mb-8 mt-28 flex w-full max-w-md flex-col">
        <h1 className="mb-7 text-2xl font-medium text-mainGray">Create Profile</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex w-full max-w-md flex-col gap-2"
          >
            <div className="flex w-full max-w-md gap-1">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              name="university"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a University" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <Input
                        placeholder="Search a University"
                        onChange={(e) => handleUniChange(e.target.value)}
                      />
                      {universities.map((university, id) => {
                        return <SelectItem value={university.name}>{university.name}</SelectItem>;
                      })}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="programme"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Programme" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Agriculture & Natural Resources Conservation">
                        Agriculture & Natural Resources Conservation
                      </SelectItem>
                      <SelectItem value="Architecture">Architecture</SelectItem>
                      <SelectItem value="Area, Ethnic, and Multidisciplinary Studies">
                        Area, Ethnic, and Multidisciplinary Studies
                      </SelectItem>
                      <SelectItem value="Visual & Performing">Visual & Performing</SelectItem>
                      <SelectItem value="Business">Business</SelectItem>
                      <SelectItem value="Communications">Communications</SelectItem>
                      <SelectItem value="Community, Family, and Personal Services">
                        Community, Family, and Personal Services
                      </SelectItem>
                      <SelectItem value="Computer Science and Mathematics">
                        Computer Science and Mathematics
                      </SelectItem>
                      <SelectItem value="Education">Education</SelectItem>
                      <SelectItem value="Engineering">Engineering</SelectItem>
                      <SelectItem value="Engineering Technology and Drafting">
                        Engineering Technology and Drafting
                      </SelectItem>
                      <SelectItem value="English and Foreign Languages">
                        English and Foreign Languages
                      </SelectItem>
                      <SelectItem value="Health Administration and Assisting">
                        Health Administration and Assisting
                      </SelectItem>
                      <SelectItem value="Health Sciences and Technologies">
                        Health Sciences and Technologies
                      </SelectItem>
                      <SelectItem value="Philosophy, Religion, and Theology">
                        Philosophy, Religion, and Theology
                      </SelectItem>
                      <SelectItem value="Repair, Production and Construction">
                        Repair, Production and Construction
                      </SelectItem>
                      <SelectItem value="Biological and Physical">
                        Biological and Physical
                      </SelectItem>
                      <SelectItem value="Social Sciences and Law">
                        Social Sciences and Law
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="educationLevel"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an Education Level" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="Bachelor">Bachelor</SelectItem>
                      <SelectItem value="Master">Master</SelectItem>
                      <SelectItem value="PhD">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />{' '}
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Goal Budget (in USDC)"
                      type="number"
                      min={1}
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />{' '}
            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span className="text-base text-zinc-500">Deadline</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>{field.value || 'Select a Region'}</SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="Africa">Africa</SelectItem>
                      <SelectItem value="Antarctica">Antarctica</SelectItem>
                      <SelectItem value="Asia">Asia</SelectItem>
                      <SelectItem value="Europe">Europe</SelectItem>
                      <SelectItem value="North America">North America</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                      <SelectItem value="South America">South America</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />{' '}
            <FormField
              control={form.control}
              name="caseDescription"
              render={({ field }) => (
                <FormItem className="mt-2">
                  <FormControl>
                    <Textarea placeholder="Describe your case here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="blue" className="mt-2 h-10 w-1/3">
              Create Profile
            </Button>
          </form>
        </Form>
      </main>
      <Footer />
    </>
  );
}
