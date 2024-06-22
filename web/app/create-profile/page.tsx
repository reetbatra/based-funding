'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  firstname: z.string(),
  lastname: z.string().min(1),
  university: z.string().min(1),
  programme: z.string().min(1),
  educationLevel: z.enum(['Bachelor', 'Master', 'PhD']),
  budget: z.number().min(0),
  deadline: z.date({
    required_error: 'Required.',
  }),
  location: z.enum([
    'Africa',
    'Antarctica',
    'Asia',
    'Europe',
    'North America',
    'Australia',
    'South America',
  ]),
  caseDescription: z.string().min(1),
});

async function onSubmit(data: z.infer<typeof formSchema>) {
  console.log(data);
}

export default function ApplyPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-md flex-col items-start justify-center">
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
              control={form.control}
              name="university"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a University" />
                      </SelectTrigger>
                    </FormControl>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />{' '}
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
                      placeholder="Budget"
                      type="number"
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
                      <SelectTrigger>{field.value || 'Select a location'}</SelectTrigger>
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
